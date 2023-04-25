from flask import Flask, request, jsonify, render_template
# jsonify: transforma un diccionario en Python a un JSON para que se pueda leer
# render_template: retorna HTML; se debe crear el archivo html en una carpeta llamada "templates"

app = Flask(__name__)       #significa que es el archivo principal de mi aplicación Flask
# @app = decorador (?)
@app.route("/saludar", methods=['GET', 'POST'])     #Recordar: el navegador me permite solo hacer GET; el resto de las funciones las vemos en Postman
def saludar():
    if(request.method=='GET'):
        return "Buenas noches, hace frío :D"
    else:
        body = request.get_json()
        print(body)     #al hacer el POST en Postman, me aparece en consola lo que escribí en formato JSON (en Postman)
        # return f'Buenos días {body["name"]}, hace frío :D'
        return jsonify({
            "name": body['name'],
            "saludo": "buenas noches, hace frío"
        })
    
@app.route('/', methods=['GET'])
def html():
    return render_template("index.html")

#Para crear rutas dinámicas (con parámetros)
@app.route("/chayanne/<int:numero>", methods=['GET']) # int = el parámetro es un número entero; si quiero texto dejo solo <numero>
def verso(numero):
    cancion = [
        "De lunes a domingo voy desesperado",
        "Tú dime dónde estás que yo no te he encontrado",
        "Hay que ser torero, poner el alma en el ruedo"
    ]
    return cancion[numero]


app.run(port='5432')
 # para que la aplicación corra
 # aquí le puedo decir en qué puerto quiero que corra
 # para encontrarlo en el navegador, puedo escribir localhost:5432