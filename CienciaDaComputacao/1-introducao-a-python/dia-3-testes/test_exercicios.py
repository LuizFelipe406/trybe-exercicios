import pytest
from exercicios import exercicio_1

def test_exercicio1_when_list_has_letter_return_Type_Error ():
  with pytest.raises(TypeError):
        exercicio_1([1,2,'a'])

def test_exercicio1_when_list_has_len_0_return_Value_Error ():
  with pytest.raises(ValueError):
        exercicio_1([])

def test_exercicio1_when_list_is_correct_return_expected ():
  assert exercicio_1([1,2,3,4,5]) == [1,2,"Fizz",4,"Buzz"]