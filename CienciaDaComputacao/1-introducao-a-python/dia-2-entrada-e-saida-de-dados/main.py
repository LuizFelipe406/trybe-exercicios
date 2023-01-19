import json
import csv

with open("books.json") as file:
  books = json.load(file)

books_by_category = dict()

for book in books:
  for category in book["categories"]:
    if category not in books_by_category.keys():
      books_by_category[category] = 0
    books_by_category[category] += 1

result = dict()

for category in books_by_category:
  result[category] = books_by_category[category] / len(books)

with open("result.csv", "w", encoding = "utf-8") as file:
    writer = csv.writer(file)

    headers = [
        "Categoria",
        "Porcentagem",
    ]
    writer.writerow(headers)

    for category, percent in result.items():
        row = [
            category,
            percent,
        ]
        writer.writerow(row)
