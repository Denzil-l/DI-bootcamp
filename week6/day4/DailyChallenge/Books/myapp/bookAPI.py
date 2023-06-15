import requests
from .models import Book

def fetch_books_from_api():
    url = 'https://www.googleapis.com/books/v1/volumes'
    params = {
        'q': 'your_search_query',  # ваш запрос для поиска книг
        'maxResults': 10,  # максимальное количество книг, которое вы хотите получить
    }
    response = requests.get(url, params=params)
    data = response.json()

    # Обработка полученных данных и создание экземпляров модели Book
    for item in data.get('items', []):
        volume_info = item.get('volumeInfo', {})
        title = volume_info.get('title')
        author = ', '.join(volume_info.get('authors', []))
        published_date = volume_info.get('publishedDate')
        description = volume_info.get('description')
        page_count = volume_info.get('pageCount')
        categories = ', '.join(volume_info.get('categories', []))
        thumbnail_url = volume_info.get('imageLinks', {}).get('thumbnail')

        book = Book(
            title=title,
            author=author,
            published_date=published_date,
            description=description,
            page_count=page_count,
            categories=categories,
            thumbnail_url=thumbnail_url
        )
        book.save()

    # Вывод сообщения об успешном выполнении операции
    print(f"Successfully fetched {len(data.get('items', []))} books from API.")


fetch_books_from_api()