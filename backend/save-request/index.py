import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    '''API для сохранения заявок на eSIM с данными о тарифе'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method == 'POST':
        data = json.loads(event.get('body', '{}'))
        phone = data.get('phone', '')
        data_gb = data.get('data_gb', 0)
        minutes = data.get('minutes', 0)

        if not phone or not data_gb or not minutes:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Все поля обязательны'})
            }

        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor()
        
        schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
        cur.execute(
            f'INSERT INTO {schema}.requests (phone, data_gb, minutes) VALUES (%s, %s, %s) RETURNING id',
            (phone, data_gb, minutes)
        )
        request_id = cur.fetchone()[0]
        
        conn.commit()
        cur.close()
        conn.close()

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'id': request_id})
        }

    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'})
    }
