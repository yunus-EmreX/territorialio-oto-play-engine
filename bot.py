from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Open the Territorial.io website
driver = webdriver.Chrome()
driver.get("https://territorial.io/")

# Wait for the page to load
time.sleep(5)

# Enter your username and password
username = driver.find_element_by_name("username")
password = driver.find_element_by_name("password")
username.send_keys("your_username")
password.send_keys("your_password")
password.send_keys(Keys.RETURN)

# Wait for the game to load
time.sleep(10)

# Collect resources and build structures
while True:
    try:
        # Collect resources
        driver.find_element_by_id("collect-resources").click()
        time.sleep(1)

        # Build structures
        driver.find_element_by_id("build-structures").click()
        time.sleep(1)

        # Move units
        driver.find_element_by_id("move-units").click()
        time.sleep(1)

    except:
        break

# Quit the browser
driver.quit()
