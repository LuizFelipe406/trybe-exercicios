class TV:
  def __init__(self, tamanho):
    self.__volume = 50
    self.__canal = 1
    self.__tamanho = tamanho
    self.__ligada = False
  
  @property
  def tamanho(self):
      return self.__tamanho
  
  @property
  def canal(self):
      return self.__canal

  @property
  def ligada(self):
      return self.__ligada

  def aumentar_volume(self):
    if self.__volume < 99:
      self.__volume += 1
    else:
      return "a TV está com o volume máximo"

  def diminuir_volume(self):
    if self.__volume > 0:
      self.__volume -= 1
    else:
      return "a TV está com o volume mínimo"

  def modificar_canal(self, canal):
    if 1 < canal < 99:
      self.__canal = canal
    else:
      raise ValueError("o canal deve estar entre 1 e 99")

  def ligar_desligar(self):
    self.__ligada = not self.__ligada
