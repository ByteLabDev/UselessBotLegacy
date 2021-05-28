import tkinter as tk
from tkinter import ttk
import os
import subprocess
import tkinter as tk 
import ctypes

myappid = 'mycompany.myproduct.subproduct.version' # arbitrary string
ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID(myappid)


window = tk.Tk()

window.iconbitmap(r"Images/UselessBot.ico")

 
window.title("UselessBot - Login")
window.minsize(0,0)
 
def clickMe():
    label.configure(text= 'Hello ' + name.get())
    if(name.get() == "Password"):
        os.popen("C:/Users/Adems/UselessBot/run.pyw")
        os._exit(9)
    else:
        os._exit(9)
    

label = ttk.Label(window, text = "Please Enter Password")
label.grid(column = 1, row = 0)
 
 
 
 
name = tk.StringVar()
nameEntered = ttk.Entry(window, width = 15, show = "*", textvariable = name)
nameEntered.grid(column = 1, row = 1)
 
 
button = ttk.Button(window, text = "Enter", command = clickMe)
button.grid(column= 1, row = 2)


 
window.mainloop()


