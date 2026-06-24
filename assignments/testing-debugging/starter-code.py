def calculate_average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)


def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True


def test_calculate_average():
    assert calculate_average([2, 4, 6]) == 4
    assert calculate_average([1, 2, 3, 4]) == 2.5
    assert calculate_average([]) == 0


def test_is_prime():
    assert is_prime(2) is True
    assert is_prime(15) is False
    assert is_prime(17) is True


if __name__ == "__main__":
    test_calculate_average()
    test_is_prime()
    print("All tests passed!")
