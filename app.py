from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def landing():
    return render_template('/landing/landing.html')

@app.route('/load')
def anim():
    return render_template('/animation/index.html')

@app.route('/homepage')
def homepage():
    return render_template('/Homepage/homepage.html')

@app.route('/hackathon')
def hackathon():
    return render_template('/Events/Hackathon/Hackathon.html')

@app.route('/robowar')
def robowar():
    return render_template('/Events/Robowar/index.html')

@app.route('/panaldiscussion')
def panaldiscussion():
    return render_template('/Events/panel_Discussion/index.html')

@app.route('/projectexhibition')
def projectexhibition():
    return render_template('/Events/Project_Exhibition/index.html')

@app.route('/codepuzzle')
def codepuzzle():
    return render_template('/Events/Code_Puzzle/codepuzzle.html')

@app.route('/debugcode')
def debugcode():
    return render_template('/Events/Code_Debug/codedebug.html')

@app.route('/ctf')
def ctf():
    return render_template('/Events/Ctf/ctf.html')

@app.route('/dsaround')
def dsaround():
    return render_template('/Events/Dsa/index.html')

@app.route('/blindcode')
def blindcode():
    return render_template('/Events/Blind_Code/Blind_Code.html')

if __name__=="__main__":
    app.run(debug=True,port=5500)


