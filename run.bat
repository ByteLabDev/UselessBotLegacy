@echo off
set LOGFILE=C:/Users/Adems/UselessBot/Logs/log667.log
call :LOG > %LOGFILE%
exit /B
:LOG
:main
node .
echo Restarting...
goto main
