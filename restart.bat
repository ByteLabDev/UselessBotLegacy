@echo off
set LOGFILE=C:/Users/Adems/UselessBot/Logs/log223.log
call :LOG > %LOGFILE%
exit /B
:LOG
echo Starting..
:main
node .
echo Restarting Bot..
goto main