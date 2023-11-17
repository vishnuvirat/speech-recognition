Steps for home automation project to run:

- Connect the raspberry pi and the laptop to the same wifi.
- In the raspberry pi → terminal, navigate to the place where the flask file exists. (i.e, Desktop)
- Then enter the command “flask run –host=0.0.0.0”
- In raspberry pi → terminal → enter “ip addr” to know the local and global IP addresses of the wifi
- Note the global IP address. (ex : 192.168.1.27)
- In Laptop, open the project navigate to → speech recognition → home automation → src → config.js
- In config.js file enter the global IP address in the raspURL.ex: http://globalIpAdress:5000 (ex: http://192.168.1.27:5000)
- In laptop navigate to the home automation in vs code and run the UI (npm run dev)
- In the raspberry pi terminal it’ll show which pin is active or not. According to it, connect the LED to the raspberry pi.
