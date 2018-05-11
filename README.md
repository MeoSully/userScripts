# userScripts
All Script you can run on DevTools of browser

# Includes
* Instagram
  * [getListFollowing.js](#getlistfollowing)
  * [loveInstagramNewsfeed.js](#loveinstagramnewsfeed)
  * [unfollowInstagramUser.js](#unfollowinstagramuser)
* Facebook
  * [unfollowUser.js](#unfollowuser)
  * [seeOldMessagesv1.js](#seeoldmessagesv1)
  * [unblockUserv1.js](#unblockuserv1)
  * [unblockUserv2.js](#unblockuserv1)
  * [removeUnavailableMember.js](#removeunavailablemember)
  
# Description & How to Use

## getListFollowing

Get a list, that includes whoever you are following.

**How To Use:**
```objc
  1. Open your profile
  2. Click to "... following" (... which is user you are following)
  3. Open DevTools (Press F12) and switch to tab Console
  4. Paste script & Run
```

## loveInstagramNewsFeed

React "Love" to all posts you see in News Feed.

**How To Use:**
```objc
  1. Login to Instagram.com (Absolutely)
  2. Open DevTools (Press F12) and switch to tab Console
  3. Paste script & Run
```
**You also can add it to an Bookmark**
```obc
  1. Login to Instagram.com (Absolutely)
  2. Create new Bookmark
  3. Fill in Address: javascript: setInterval(function() {Array.from(document.getElementsByClassName("_8scx2 coreSpriteHeartOpen")).map(elements => elements.click());});
  4. Click to Bookmark ;)
```

## unfollowInstagramUser

Unfollow all user you are following on instagram.

**How To Use:**
```objc
  1. Open your profile
  2. Click to "... following" (... which is user you are following)
  3. Open DevTools (Press F12) and switch to tab Console
  4. Paste script & Run
```

## unfollowUser

Unfollow all user you are following on Facebook.

**How To Use:**
```objc
  1. Open Follow page (https://www.facebook.com/me/following)
  3. Open DevTools (Press F12) and switch to tab Console
  4. Paste script & Run
```

## seeOldMessagesv1

See old message in conversation.

**How To Use:**
```objc
  1. Open conversation page (https://m.facebook.com/messages/read/*)
  3. Open DevTools (Press F12) and switch to tab Console
  4. Paste script & Run
```

## unblockUserv1

Unblock all user in Settings > Block of Facebook.

**How To Use:**
```objc
  1. Open Settings > Block (https://www.facebook.com/settings?tab=blocking)
  3. Open DevTools (Press F12) and switch to tab Console
  4. Paste script & Run
```

**V2 have the same usage method**

## removeunavailablemember

Remove Unavailable Member in your facebook group.
```objc
  1. Open group unavailable member page (https://www.facebook.com/groups/*/unavailable_accounts/)
  3. Open DevTools (Press F12) and switch to tab Console
  4. Paste script & Run
  5. Paste your Access Token to Prompt popup
  6. Enjoy!
```
