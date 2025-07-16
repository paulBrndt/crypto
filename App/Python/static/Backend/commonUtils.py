def colored(txt, *args, **kwargs) -> str:
    return txt
print_disabled = False
trace_disabled = True


def my_print(msg):
    if print_disabled:
        return
    else:
       print(msg)

def InfoMsg(msg):
    my_print(colored(' - ' + msg, 'white', attrs=["dark"]))

def ErrorMsg(msg):
    my_print(colored('Error: ', 'red') + msg)

def WarningMsg(msg):
    my_print(colored('Warning: ', 'yellow') + msg)

def NoteMsg(msg):
    my_print(colored('Note: ', 'cyan') + msg)

def TraceMsg(msg):
    if (not trace_disabled):
        my_print(colored('Trace ' + msg, 'white', attrs=["dark"]))

def DoneMsg():
    my_print("Done.\n")