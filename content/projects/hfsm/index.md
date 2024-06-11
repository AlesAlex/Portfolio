+++
title = "Hierarchical Finite State Machine Library"
description = "C# HFSM library."
image="img/HFSMLogo.png"
weight=2
DisplayNextAndPrevious=true
+++

<a title="GitHub" rel="me" data-animate-hover="pulse" href="https://github.com/AlexBlackfrost/Hierarchical-Finite-State-Machine" target="_blank">
	<svg class ="github-logo" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
	  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
	</svg>
</a>

A hierarchical finite state machine library implemented in C#. The GitHub repository is setup as a Unity package, but the source code does not depend on Unity
packages and can be used in any C# application. This library is open source and you can check the source code on my <a title="GitHub" rel="me" data-animate-hover="pulse" href="https://github.com/AlexBlackfrost/Hierarchical-Finite-State-Machine" target="_blank">GitHub repository</a>.
Its features are:
* **Class based architecture**. State machines and states are implemented inheriting from StateMachine and State classes.
* **Nested states**. Both state machines and states can implement the different logic actions: `OnEnter()`, `OnExit()` and `OnUpdate()`.
* **Event and polling transitions**. Transitions between states can be defined using events or conditions that are checked every cycle.
* **Transition actions**. Transitions can execute an `Action` when they are executed.
* **Thoroughly unit-tested**. Big emphasis on unit testing and code coverage.

I also created a simple battle royale sample project to test the library. In this project there are 3 species of creatures represent by different colors. 
They fight each other until only one species remain. All the species follow the behavior defined by the state diagram below.


<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers tags lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;Electron\&quot; modified=\&quot;2024-06-10T15:15:08.420Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/20.8.10 Chrome/106.0.5249.199 Electron/21.3.5 Safari/537.36\&quot; etag=\&quot;KhUA82I7i03-vT-HUVCy\&quot; version=\&quot;20.8.10\&quot; type=\&quot;device\&quot;&gt;&lt;diagram name=\&quot;Page-1\&quot; id=\&quot;vjHvjMp8WZoKiGbNl0eX\&quot;&gt;7VrbctowEP0aHpPx3fBIIOll2pl0MtM0jwpWbLfCokIEyNd3bUu2ZRsDwSrpNMkD1kpaS7tnz64EA3sy33xgaBF9pQEmA8sINgN7OrAs07EN+Egl21wytNxcELI4EINKwV38goVQzAtXcYCXykBOKeHxQhXOaJLgGVdkiDG6Voc9UaK+dYFC3BDczRBpSu/jgEdyF34p/4jjMJJvNr1R3jNHcrDYyTJCAV1XRPb1wJ4wSnn+NN9MMEmNJ+2Sz7vZ0VssjOGEHzJhOvz9/dnbfDY/YoOwby+fb82HC7HYJd/KDeMA9i+alPGIhjRB5LqUXjG6SgKcajWgVY75QukChCYIf2LOt8KZaMUpiCI+J6IXFsy2P8T8rPGQNi5d2Zxuqp3TrWg90YQLpZ6V9UrAmPnUYJx6HNqPhM5+5aKbmMj3LjliUoFpZwJGfxV+LSUTSijLzGGDGP7Fy9vkuQFTq+30ixAt6YrNcIczBKZglSHmHePsAj0QdpjOMRgJ5jFMEI+f1XUggf+wGFdCBB4ESo5AjFjkMyIr8aYGhEqApFZfRzHHdwuUbX0NLKGCoemDipsd6wSfPGPG8abbK00rygmGCFvBW54r2uuSBVxJblGFAWzH0GR5SYlnClZTDVZ/X7R2OlbG75EBW4/4TcwLHoHn6sqgWS4sbajrOlOI7wDdwaErpt7SGN5cgNWzTQWsvj8EKxjFn6UqzFcpdFQzRk2tNTxKbc5bDbUZ1ou9ngB/57y5qkxPDwrez4b+44FcxMulW4kYszNc+gb/AfnN0RMkI09F88i9NIyTg6SudmQZXWp1B0lLdvYIF5hQosf7vaKy42KZ4WoMAyxnscncLvvhKUw/7xFEEpPqYHW5xryz7xrgeGxXwsty+qkBHEetAXy7WQOYbTWA5+oqAcyGoc9Yr1tvoAR4PQlK2qvupQcW3MtuekqARq52PNjT6exWryy61WpmN0sfu30KYKJQ9shOUvU/UaTpvjWKtPVhZIpR8I6RozHi147S/tC/dJsocf5qIm3eWpzxLP0G8mj7UfoNn6SdA9Otq+cwYdWqfrez6n/tiXuPWs3p1tFHpZMILd/z7SuOJLarAGQ4OpRJtd1K2uc9kqjXMkXfv3QiOZQV+z80mDUWM3u5Eqmr3XPTopnFXH0sNuYcAULeaezUY8NwdOCxwddFY8MGSsYkDSzLQ/PUpsnjctHmDbABbzO5NGRCk5TwnoA/aiJE4jCB5gxshkF+lVo0niEyFh3zOAgytmzzscqgFRfZVocrVTgY/ThzVPumzG/x5ajFl/q+KPNaQr6eo5o0X/Ghat39SePQ6rp659R97b7jzm1PeqtnKn31+Wsv8atfn7ZgQsr6vg3r6a6/XvVruuuHZvm7kHx4+esa+/oP&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>

The rules that define the food chain of these species are defined by a rock, paper, scissor system:
* 🔴 > 🟢
* 🟢 > 🔵
* 🔵 > 🔴


<iframe class="video work-box-shadow" width="1200" height="675" src="https://www.youtube.com/embed/cWRrvSAdFog?si=79-OFig-Rmy9QBUt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
</br></br>
  
I also used this library in a larger scope project, a <a href="../../projects/princeofpersia" target="_blank">Prince of Persia's time rewind recreation</a>.