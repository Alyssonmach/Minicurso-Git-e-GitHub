#include <stdio.h>
#include <locale.h>

int main (void)
{
    setlocale(LC_ALL, "portuguese");

    printf("Olá Mundo!");

    return 0;
}