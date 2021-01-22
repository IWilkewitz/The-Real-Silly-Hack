# -*- coding: utf-8 -*-
"""
Created on Thu Jan 21 22:28:02 2021

@author: Ian
"""

import tweepy
from datetime import date
from PIL import Image

#keys to tie the script to the account
consumer_key = "mGCzZncNb9hj1TH8wkhybDNGB"
consumer_secret = "6SLnkbekbihZyaYJfIaqSxnnVQw6lMHv4y9Hqm0B5dfROtXDKg"
access_token = "1239363937193332737-bopJ63RmJNo6MZWZcxL87V83Kl3wth"
access_token_secret = "o149ccTdOIWqKlcmL8qvAOXK7LGUJ6naHRuVONOnBm9iv"

#actually connect the script to the account
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

#make the tweet
def makeTweet():
    tweet = "Silly image for the date of " + str(date.today())
    image_path = "img/img (" + imgnum + ").png"
    status = api.update_with_media(image_path, tweet)
    #api.update_status(status)

#create the image one pixel at a time
def updateImage(color, x, y):
    im.paste(color,(x,y,100,100))
    
#create image
im = Image.new("RGB",(100,100), "#FFF")
updateImage("red", 0, 0)
updateImage("blue", 50, 50)
im.show()