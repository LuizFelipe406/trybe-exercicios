def exercicio_1 (list):
  if len(list) == 0:
    raise ValueError
  result = []
  try:
    for number in list:
      if number % 3 == 0 and number % 5 == 0:
        result.append("FizzBuzz")
      elif number % 3 == 0:
        result.append("Fizz")
      elif number % 5 == 0:
        result.append("Buzz")
      else:
        result.append(number)
  except TypeError:
    raise TypeError
  return result

def exercicio_2 (string: str):
  conversor = {
    "ABC":2,
    "DEF":3,
    "GHI":4,
    "JKL":5,
    "MNO":6,
    "PQRS":7,
    "TUV":8,
    "WXYZ":9,
  }
  result = ''
  for letter in string:
    for key in conversor:
      if letter.upper() in list(key):
        result += str(conversor[key])
    if letter == '-' or letter.isdigit():
      result += letter
  return result

print(exercicio_2("1-HOME-SWEET-HOME"))