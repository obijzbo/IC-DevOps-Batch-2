module.exports = {
  apps: [
    {
      name: 'real-estate-api',
      script: './app.js', // Path to your main application file
      // instances: 'max', // Scale across available CPU cores
      // exec_mode: 'cluster', // Enable clustering mode
      log_file: 'logs/combined.log', // Combined logs file
      error_file: 'logs/error.log', // Error logs file
      out_file: 'logs/out.log', // Standard output logs file
      time: true, // Add timestamps to logs
    },
  ],
};