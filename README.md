
<h1># FYP</h1>
My Final Year Project work files here

<h2># To install necessary modules</h2>
- Run "npm install" in terminal to install all necessary modules.
- You can manually install modules using npm command.

<h2># To run project, use command "npm start"</h2>

<h2>
# To start necessary servers use following command lines in seperate terminals.
# open terminal inside server folder.
</h2>
mark-visualizer\src\server> nodemon analytics_server.js
</br>
mark-visualizer\src\server> nodemon authBackend.js
</br>
mark-visualizer\src\server> nodemon tableServer.js
</br>
mark-visualizer\visualization> Run locally. see NOTE section for more information
</br>
mark-visualizer\Prediction> python app.py


<h1>NOTE:</h1>
localhost and port for running html files locally: http://127.0.0.1:5500
<p>It is important to run html files locally inorder to view dashboard,prediction and analytics page-->
<h3>Change database configuration accordingly with your MySQL workbench</h3>
<pre>
  const db = mysql.createPool({
      user: "root",
      host: "localhost",
      password: "123Rabbit",
      database: "mark_visualizer",
  });
</pre>
