+++
title = "Smash Bros. x Among Us Prototype"
image="img/SmashBrosXAmongUs.png"
description = "Recreated the core mechanics of Smash Bros. and added Among Us' crewmate as a playable character."
weight=3
DisplayNextAndPrevious=true
+++

<iframe class ="work-box-shadow" width="700" height="394" src="https://www.youtube.com/embed/U9WdBFNQQxM?si=l8m_gS6dNNn6Nztd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Created the core mechanics of a platformer fighter like Smash Bros. in Unity. Then, I added Crewmate from Among Us as a playable character.
I programmed all the prototype's features and created all the art assets (3D models, textures, animations and VFX) from scratch except for the background video. 
The only assets I used from the original games were some of the SFX you can hear in the trailer. 

<h3> Character controller </h3>

I created a state machine to define the behavior of the different attacks in a modular way. This also improved code reusability, allowing me to use very similar
attack implementations for different characters without rewriting code.

For the character movement, I implemented it using a kinematic rigidbody with a capsule collider. To ensure that gameplay feels the same even at low framerates, I
used the velocity verlted algorithm to compute the movement equations in actions such as jumping.

To read player inputs, I used and extended Unity's New Input System. To implement the popular "tilt-to-run" behavior on gamepads, I programmed a custom `IInputInteraction`.

<h3> Combat system</h3>

I implemented the following set of attacks/actions for both characters:

* 3 Jab attacks.
* Forward and Up tilt attacks.
* Foward and Up smash atacks.
* Neutral, Forward, Back and Up air attacks.
* Neutral, Side, Up and Down special attacks.
* Shielding.

The damage detection is performed using hitboxes and hurtboxes defined with Unity's collider components. I took the data from <a href="https://ultimateframedata.com/mario" target="_blank">ultimateframedata.com</a>
as a reference to position and activate the hitboxes and hurtboxes.

I implemented damage and knockback formulas using the original game's formulas which can be found in the smash bros wiki:
* <a href="https://ultimateframedata.com/mario">Sakurai angle</a>.
* <a href="https://www.ssbwiki.com/Knockback#Angle_indicator" target="_blank">Knockback formula and variables</a>.

<h3> Camera system </h3>

I used Unity's Cinemachine package to implement the camera behavior. The camera frames the two fighters and zooms in and out depending on their distance from each other.
I also used additional component, such as a camera confiner to limit the camera movement, and a screen shake component to improve game-feel and damage feedback.

<h3> User Interface </h3>

I developed the interface using Unity's standard UI components. I didn't use UI Toolkit or any similar libraries. 
However, I did use <a href="https://dotween.demigiant.com/" target="_blank">DOTween</a> tweening library, which proved to be very helpful to program the damage indicators animations.


<h3> Artificial Intelligence </h3>

The AI implementation does not follow any known pattern like a behavior tree or any kind of planner. It takes decisions periodically by assigning a weight 
to each of the available actions and then executing the action highest weighted action. The weights assigned to the actions are calculated using the AI's context:
 distance to the battlefield, distance to the player, health values, shield size, etc.


{{< gallery match="images/*" sortOrder="asc" rowHeight="150" margins="5" thumbnailResizeOptions="600x600 q90 Lanczos" showExif=true previewType="blur" embedPreview=true loadJQuery=true >}}
  
 </br>
