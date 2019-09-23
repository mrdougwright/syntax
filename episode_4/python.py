class MyPython():

    def __init__(self, arg):
        self.arg = arg

    # class methods
    def addTwo(num):
        return 2 + num

    def mapAndAdd(list):
        return [MyPython.addTwo(x) for x in list]

    # instance method, passes `self` as the instance of the class
    def cap(self, str):
        return str.capitalize()


# to use:
# python
# exec(open('python.py').read())

# MyPython.addTwo(3)
# m = MyPython("unused arg")
# m.cap("a string")
