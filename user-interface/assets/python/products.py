import cv2

# Read the image
image = cv2.imread("image.jpg")

# Convert the image to grayscale
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Detect the vegetables in the image
vegetables = cv2.CascadeClassifier("vegetables.xml")
vegetables_detected = vegetables.detectMultiScale(gray)

# Draw rectangles around the detected vegetables
for (x, y, w, h) in vegetables_detected:
    cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)

# Display the image
cv2.imshow("Vegetables", image)
cv2.waitKey(0)

# Write the code to generate the table
table = """
| Vegetable | Price |
|---|---|
| Red Onions | KSh199 |
| Yellow Onions | KSh299 |
| Tomatoes | KSh109 |
"""

# Print the table
print(table)
