from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self.cartas = [
            Carta(valor, naipe) for naipe in self.naipes for valor in self.valores
        ]

    def __len__(self):
        return len(self.cartas)

    def __iter__(self):
        return BaralhoIterator(self.cartas)


class BaralhoIterator(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self.current_card = 0

    def __get_card(self, current_card):
        return self.cartas[current_card]

    def __next__(self):
        if self.current_card == len(self.cartas):
            raise StopIteration()

        data = self.__get_card(self.current_card)

        self.current_card += 1
        return data

record_cards = Baralho()

for card in record_cards:
    print(card)