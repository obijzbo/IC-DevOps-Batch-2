#!/usr/bin/env node

import { Command } from 'commander';
import { execa } from 'execa';
import chalk, { Chalk } from 'chalk';
import readline from 'readline';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dcomposePath = path.resolve(__dirname, '../', 'docker-compose.yml');

const program = new Command();

// Function to prompt for user confirmation
function promptConfirmation(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === 'y');
    });
  });
}

// Command to clean all Docker containers, images, and volumes
async function cleanAll() {
  const confirmation = await promptConfirmation(
    'Are you sure you want to clean entire Docker? (y/n): '
  );

  if (!confirmation) {
    console.log('Operation cancelled.');
    return;
  }

  try {
    console.log('Cleaning Docker containers...');
    const { stdout: containerIds } = await execa('docker', ['ps', '-aq']);
    if (containerIds) {
      await execa('docker', ['rm', '-f', ...containerIds.trim().split('\n')], { stdio: 'inherit' });
    }

    console.log('Cleaning Docker images...');
    await execa('docker', ['image', 'prune', '-a', '-f'], { stdio: 'inherit' });

    const {stdout:volumeIds} = await execa('docker',['volume','ls','-q'])

    console.log('Cleaning Docker volumes...');
    await execa('docker', ['volume', 'rm', ...volumeIds.trim().split('\n')], { stdio: 'inherit' });

    console.log('Docker cleanup complete.');
  } catch (error) {
    console.error('Error executing Docker cleanup:', error);
  }
}

// Command to clean Docker images
async function cleanImage() {
  try {
    console.log('Cleaning Docker images...');
    await execa('docker', ['image', 'prune', '-a', '-f'], { stdio: 'inherit' });
    console.log('Docker image cleanup complete.');
  } catch (error) {
    console.error('Error executing Docker image cleanup:', error);
  }
}

// Command to clean Docker volumes
async function cleanVolume() {
  try {
    console.log('Cleaning Docker volumes...');
    await execa('docker', ['volume', 'prune', '-f'], { stdio: 'inherit' });
    console.log('Docker volume cleanup complete.');
  } catch (error) {
    console.error('Error executing Docker volume cleanup:', error);
  }
}

async function localDown() {
  try {
    console.log('Bringing down local environment...');
    await execa('docker', ['compose','-f',`${dcomposePath}`, 'down'], { stdio: 'inherit' });
    console.log('Docker Compose down complete.');
  } catch (error) {
    console.error('Error executing Docker Compose down:', error);
  }
}

async function populateApp() {
  try {
    console.log('Populating app...');
    await execa('node', ['Wrapper_Tool/seed.mjs'], { stdio: 'inherit' });
    console.log('App populated with sample data.');
  } catch (error) {
    console.error('Error executing seed script:', error);
  }
}

async function cleandb() {
  try {
    console.log("Cleaning up the database...");
    await execa('node',['Wrapper_Tool/cleandb.mjs'], {stdio:'inherit'});
    console.log(chalk.green('DB clean is successful'));
  } catch(error){
    console.error('Error executing cleandb script:', error);
  }
}

// New command to display logs by service name
async function showLogs(service) {
  try {
    console.log(`Fetching logs for service: ${service}`);
    await execa('docker-compose', ['-f',`${dcomposePath}`,'logs', service], { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error fetching logs for ${service}:`, error);
  }
}

program
  .version('1.0.0')
  .description('Docker CLI Tool');


  program
  .command('up')
  .description('Run local development environment')
  .option('--redo', 'Rebuild and force recreate containers')
  .action(async (cmd, options) => {
    try {
      const additionalArgs = process.argv.slice(program.args.length + 2);
      const args = ['-f',`${dcomposePath}`,'up', '-d'];

      if (options.redo) {
        args.push('--build', '--force-recreate');
      }

      args.push(...additionalArgs);

      console.log(`Running: docker compose ${args.join(' ')}`);
      console.log('Additional Args:', additionalArgs);
      console.log('Redo Flag Status:', options.redo);

      await execa('docker', ['compose', ...args], { stdio: 'inherit' });
    } catch (error) {
      console.error('Error executing Docker command:', error);
    }
  });

  program
  .command('down')
  .description('Bring down Docker Compose setup')
  .action(localDown);

program
  .command('clean-all')
  .description('Clean all Docker containers, images, and volumes')
  .action(cleanAll);

program
  .command('clean-image')
  .description('Clean unused Docker images')
  .action(cleanImage);

program
  .command('clean-vol')
  .description('Clean unused Docker volumes')
  .action(cleanVolume);

program
  .command("populate")
  .description("Populate the application with sample data")
  .action(populateApp)

program
  .command("cleandb")
  .description("Clean Up the Database")
  .action(cleandb)


program
  .command('logs <service>')
  .description('Display logs for the specified service (e.g., backend, frontend)')
  .action(showLogs);

program.parse(process.argv);
