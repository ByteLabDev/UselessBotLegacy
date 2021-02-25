import subprocess
import tkinter as tk
import time
import os, signal
import psutil
from tkinter import *
import ctypes
from PIL import ImageTk, Image
import pyautogui
import psutil
import ctypes
#from win10toast import ToastNotifier
#toaster = ToastNotifier()
#from infi.systray import SysTrayIcon
from pystray import MenuItem as item
import pystray
from PIL import Image
from pystray import MenuItem as item
from PIL import Image





def process_exists(process_name):
    call = 'TASKLIST', '/FI', 'imagename eq %s' % process_name
    # use buildin check_output right away
    output = subprocess.check_output(call, shell = True).decode()
    # check in last line for process name
    last_line = output.strip().split('\r\n')[-1]
    # because Fail message could be translated
    return last_line.lower().startswith(process_name.lower())




#pystray.Icon.run()


def minimizeWindow():
    root.overrideredirect(False)
    root.iconify()

def removeoverride():
    root.deiconify()
    root.overrideredirect(True)

    


y_root = 100
x_root = 100


myappid = 'mycompany.myproduct.subproduct.version' # arbitrary string
ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID(myappid)


pingfile = open(r"BotPing.txt","r")



root= tk.Tk()



# make a frame for the title bar
title_bar = Frame(root, bg='#2e2e2e', relief='raised', bd=2,highlightthickness=0,borderwidth=0)

# put a close button on the title bar
close_button = Button(title_bar, text='X', command=root.destroy,bg="#2e2e2e",padx=2,pady=2,activebackground='red',bd=0,font="bold",fg='white',highlightthickness=0)
minimize_button = Button(title_bar, text='—', command=minimizeWindow,bg="#2e2e2e",padx=2,pady=2,activebackground='red',bd=0,font="bold",fg='white',highlightthickness=0)
# a canvas for the main area of the window
window = Canvas(root, bg='#2e2e2e',highlightthickness=0)

# pack the widgets
title_bar.pack(expand=1, fill=X)
close_button.pack(side=RIGHT)
#minimize_button.pack(side=RIGHT)
#window.pack(expand=1, fill=BOTH)
xwin=None
ywin=None
# bind title bar motion to the move window function

def move_window(event):
    root.geometry('+{0}+{1}'.format(event.x_root, event.y_root))
def change_on_hovering(event):
    global close_button
    close_button['bg']='red'
def return_to_normalstate(event):
    global close_button
    close_button['bg']='#2e2e2e'

def change_on_hovering2(event):
    global minimize_button
    minimize_button['bg']='#a9a9a9'
def return_to_normalstate2(event):
    global minimize_button
    minimize_button['bg']='#2e2e2e'


title_bar.bind('<B1-Motion>', move_window)
close_button.bind('<Enter>',change_on_hovering)
close_button.bind('<Leave>',return_to_normalstate)
#minimize_button.bind('<Enter>',change_on_hovering2)
#minimize_button.bind('<Leave>',return_to_normalstate2)



all_minimized = True




root.title('UselessBot')
root.iconbitmap(default="Images/UselessBot.ico")
#proc1 = subprocess.Popen("C:/Users/Adems/TestingBot/run.bat", shell = True)
   
canvas1 = tk.Canvas(root, width = 350, height = 300)
canvas1.pack()




        

#lambda:[funct1(),funct2()]
def start_batch():
       File_object = open(r"LogCount.txt","r")
       Filenum = File_object.read()
       Counted = int(Filenum)
       TotalC = Counted + 1
       StrC = str(TotalC)
       #Counter = open("LogCount.txt", "w")
       #Counter.write(str(Counted))

       textList = ["@echo off", "set LOGFILE=C:/Users/Adems/UselessBot/Logs/log"+str(Filenum)+".log", "call :LOG > %LOGFILE%", "exit /B", ":LOG", ":main", "node .", "echo Restarting...", "goto main"]

       outF = open("run.bat", "w")
       for line in textList:
         # write line to output file
         outF.write(line)
         outF.write("\n")
       outF.close()



       file = open("LogCount.txt", "w") 
       file.write(StrC) 
       file.close() 
       subprocess.Popen([r'C:/Users/Adems/UselessBot/run.bat'], shell = True)
       subprocess.Popen('easyrp.exe', shell = True)
       #toaster.show_toast("UselessBot","UselessBot is online!", icon_path="Images/UselessBot.ico", duration=5, threaded = True)


user_name = Label(root, bg = '#2e2e2e', fg = 'white',
                     text = "Inactive").place(x = 145, y = 300,)

def refresh():
       if(process_exists('node.exe') == True):
              pingfile = open(r"BotPing.txt","r")
              user_name = Label(root, bg = '#2e2e2e', fg = 'white',
                     text = "Ping: "+pingfile.read()).place(x = 145, y = 300,)
       else:
              user_name = Label(root, bg = '#2e2e2e', fg = 'white',
                     text = "Inactive").place(x = 145, y = 300,)

def kill_batch():
       subprocess.Popen('taskkil.bat', shell = True)


def refresh_log():
       os.popen("C:/Users/Adems/UselessBot/ViewLog.pyw")

img = ImageTk.PhotoImage(Image.open("Images/UselessBotShrinked.png"))
panel = tk.Label(root, image = img, borderwidth = 0)
button0 = tk.Button (root, text='Shut down UselessBot',command=kill_batch,bg='#2e2e2e',fg='white', padx=2,pady=2, bd=0, highlightthickness=0, borderwidth=0)
button1 = tk.Button (root, text='Run UselessBot',command=start_batch,bg='#2e2e2e',fg='white', borderwidth=0)
button2 = tk.Button (root, text='Refresh ping',command=refresh,bg='#2e2e2e',fg='white', borderwidth=0)
button3 = tk.Button (root, text='Refresh log',command=refresh_log,bg='#2e2e2e',fg='white', borderwidth=0)
txtlabel = Label(canvas1,
                 textvariable="Ping")

canvas1.create_window(175, 140, window=button1)
canvas1.create_window(175, 175, window=button0)
canvas1.create_window(175, 210, window=button2)
canvas1.create_window(175, 70, window=panel)
canvas1.create_window(175, 245, window=button3)

#root.overrideredirect(True)

canvas1['background']='#856ff8'
canvas1.config(highlightbackground='#856ff8')

root.overrideredirect(True)


#while toaster.notification_active(): time.sleep(0.1)



def killprocess():
    pass



root.mainloop()









