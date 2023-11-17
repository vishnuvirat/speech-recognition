from datetime import date
from gpiozero import LED
from time import sleep

# red = LED(17)
# relay1 = LED(14)
# relay2 = LED(15)

while True:

        if words == "today":
            print(date.today()) 

        if words == "LED on":
            print("Led on")

        if words == "LED off":
            print("Led off")

        if words == "relay one on":
            print("relay one on")

        if words == "relay one off":
            print("relay one off")

        if words == "relay two on":
            print("relay two on")

        if words == "relay two off":
            print("relay two off")

        if words == "exit":
            print("...")
            sleep(1)
            print("...")
            sleep(1)
            print("...")
            sleep(1)
            print("Goodbye")
            exit()

