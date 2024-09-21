import argparse
import mysql.connector
from mysql.connector import Error

# Configuration
DB_CONFIG = {
    'host': 'localhost',
    'port': 3306,
    'user': 'ubuntu',
    'password': '123456',
    'database': 'mydb'
}

def connect_to_database():
    try:
        connection = mysql.connector.connect(**DB_CONFIG)
        if connection.is_connected():
            return connection
    except Error as e:
        print(f"Error connecting to MySQL database: {e}")
        return None

def create_users(connection):
    try:
        cursor = connection.cursor()
        insert_query = """
        INSERT INTO users (name, email, password) VALUES
        (%s, %s, %s), (%s, %s, %s), (%s, %s, %s)
        """
        users = [
            ("Alice Smith", "alice@example.com", "123456"),
            ("Bob Johnson", "bob@example.com", "123456"),
            ("Charlie Brown", "charlie@example.com", "123456")
        ]
        flat_users = [item for sublist in users for item in sublist]
        cursor.execute(insert_query, flat_users)
        connection.commit()
        print(f"{cursor.rowcount} users inserted successfully.")
    except Error as e:
        print(f"Error creating users: {e}")
    finally:
        if cursor:
            cursor.close()

def delete_all_users(connection):
    try:
        cursor = connection.cursor()
        delete_query = "DELETE FROM users"
        cursor.execute(delete_query)
        connection.commit()
        print(f"{cursor.rowcount} users deleted successfully.")
    except Error as e:
        print(f"Error deleting users: {e}")
    finally:
        if cursor:
            cursor.close()

def main():
    parser = argparse.ArgumentParser(description="Manage User table in MySQL database")
    parser.add_argument("action", choices=["create", "delete"], help="Action to perform")
    args = parser.parse_args()

    connection = connect_to_database()
    if not connection:
        return

    try:
        if args.action == "create":
            create_users(connection)
        elif args.action == "delete":
            delete_all_users(connection)
    finally:
        if connection.is_connected():
            connection.close()
            print("Database connection closed.")

if __name__ == "__main__":
    main()