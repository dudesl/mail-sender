> Cliente de consola de soporte para testeo y envío de emails.

UI MAILS
===================
# Instalación
```
$ npm install -g mail-sender
```

# Comandos

## Send
> Útil para enviar por email código html

```
$ mail-sender send <path> <to>
   -s <subject>
   -f <from_address>
```

El comando `send` recibe dos parámetros:

* `<path>`: Le indicamos un path a un archivo de texto plano (html si queremos probar un email). El path debe ser absoluto, o relativo a donde ejecutemos el comando.
* `<to>`: Uno o varios emails a los que se les enviará la prueba. El formato es `lorem@email.com,ipsum@email`

### Opciones:
* `-s --subject`: Se indica cual es el subject del envío
* `-f --from`: Se customiza el email del remitente
