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