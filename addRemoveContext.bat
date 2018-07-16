@echo off
set /p appName="Application Name (No Spaces): "
set /p id="'Add' or 'Remove' %appName%? "
if "%id%"=="Add" (
	echo Command Received: Add
	echo.
	goto addApp
) else (
	echo Command Received: Remove
	REG DELETE HKCR\Directory\Background\shell\%appName% /f
	echo Done!
	pause
	exit
)

:addApp
set /p ttle="Title (View In Context Menu): "
echo Title: %ttle%
echo.
set /p appath="Path To Application: "
echo Path: %appath%
echo.
echo Is this an Command-line?
set /p cmLine="Yes or No: "
REG ADD HKCR\Directory\Background\shell\%appName% /ve /d "%ttle%" /t REG_SZ /f
REG ADD HKCR\Directory\Background\shell\%appName% /v "Icon" /d "%appath%,0" /t REG_SZ /f
if "%cmLine%"=="Yes" (
	REG ADD HKCR\Directory\Background\shell\%appname%\command /ve /d "\"%appath%\" \\\"%%V\\\"\""
	echo Done!
	pause
	exit
) else (
	REG ADD HKCR\Directory\Background\shell\%appName%\command /ve /d "\"%appath%\""
	echo Done!
	pause
	exit
)
