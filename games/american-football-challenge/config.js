const config =
{
	// THIS DATA IS USED FOR ENDLESS MODE.
	LIVES: 5,

	RANDOM_GOAL_INTERVAL: 3, //seconds

	// goal moves are based on the GAME_PROGRESS variable. once a the player reaches a specific turn, the goal moves will be choosen from the current turn
	// the speed 0.8 is the standard speed. by increasing/decreasing its value you'll get higher/lesser speed.
	GAME_PROGRESS: [
		{
			turn: 0,
			speed: 0.5,
			patterns:
			{moveX: true, changeWidth: true, LR: false, BS: false, wind : [0.5, 5], obstacle: "None"}
		},
		{
			turn: 3,
			speed: 0.6,
			patterns:
			{moveX: true, changeWidth: true, LR: false, BS: false, wind: [0.5, 5], obstacle: "Easy"}
		},
		{
			turn: 6,
			speed: 0.8,
			patterns:
			{moveX: true, changeWidth: true, LR: false, BS: false, wind: [0.5, 5], obstacle: "Medium"}
		},
		{
			turn: 10,
			speed: 0.85,
			patterns:
			{moveX: true, changeWidth: true, LR: true, BS: true, wind: [0.5, 5], obstacle: "Medium"}
		},
		{
			turn: 20,
			speed: .95,
			patterns:
			{moveX: true, changeWidth: true, LR: true, BS: true, wind: [0.5, 5], obstacle: "Hard"}
		},
		{
			turn: 30,
			speed: 1,
			patterns:
			{moveX: true, changeWidth: true, LR: true, BS: true, wind: [0.5, 5], obstacle: "Hard"}
		}
	],
	
	// THIS DATA IS USED FOR LEVEL MODE.
	/*
	******************************************************************************************************************************************************************************
	FIX_LEVELS: levels that are controlled and not completely random.
	FIX_LEVELS is an array of objects. Each element of this array is related to a level (according to the elements index, for example element wit index 0 is for level 1)
	******************************************************************************************************************************************************************************
	RANDOM_LEVELS: levels that are not controlled and these levels are generated in a random way.
	RANDOM_LEVELS is an array of objects. This array is used after the player finishes all the FIX_LEVELS.
	Each element of this array is related to some level, according to the duration that the element has.
	For example elemet with index 0 and duration 5 means that we have these conditions for 5 levels after the FIX_LEVELS.
	Element with index 2 and duration 10 means that we have these conditions for 10 levels after the previous levels in RANDOM_LEVELS are done.
	The last element with duration "Always" means that we have these conditions for always after all the previous levels in RANDOM_LEVELS are done.
	******************************************************************************************************************************************************************************
	*/
	
	/*
	Description for each variable:
	******************************************************************************************************************************************************************************
	speed: is the speed of goal and obstacles movements.
	speed is a two-element array (the values are float). The first element is minimum speed and the second one is maximum speed. and the final speed is a value between these two.
	(If min and max are equal, then the final value will be also equal to them)
	
	******************************************************************************************************************************************************************************
	goals: is the number of time you need to score to win the level.
	goals is a two-element array (the values are positive integer). The first element is minimum goals and the second one is maximum goal.
	The final goal is a value between these two. (If min and max are equal, then the final value will be also equal to them)
	
	******************************************************************************************************************************************************************************
	timer: Is used for the levels that have a timer.
	timer is a one-element array. The value in timer is the chance that if a level has timer.
	If a level doesn't have a timer, then you need to set the value to 0.
	If a level has a timer, then you need to set the value to 100,
	If a level has a timer by a chance you need to set the timer to that value. For example if you set timer to 30, then there is 30 percent chance that the level has a timer.
	
	******************************************************************************************************************************************************************************
	moveX: if we have moveX in a level the goal will move to a X position (between the range) on start of the level.
	If a level doesn't have moveX, then you need to set the value to 0.
	If a level has a moveX, then you need to set the chance value to 100,
	If a level has a moveX by a chance you need to set the moveX chance to that value.
	
	the range in moveX means that the goal will move to a point in that range.
	The values in range are between -300 and 300. 0 mean middle of screen. 300 mean middle of screen + 300.
	
	variance: if you want to change the goal X each time the player shoots, you need to set the chance of variance to 100.
	range of variance in moveX means, a value between the range will be added or subtracted from current goal X, each time the player shoots the ball
	
	******************************************************************************************************************************************************************************
	changeWidth: if we have changeWidth in a level the goal width will be changed to a width on start of the level.
	If a level doesn't have changeWidth, then you need to set the value to 0.
	If a level has a changeWidth, then you need to set the chance value to 100,
	If a level has a changeWidth by a chance you need to set the changeWidth chance to that value.
	
	the range in changeWidth means that the goal width will be changed to a value between the range.
	The values in range are between 200 and 480.
	
	variance: if you want to change the goal each time the player shoots, you need to set the chance of variance to 100.
	range of variance in moveX means, a value between the range will be added or subtracted from current goal X, each time the player shoots the ball
	
	******************************************************************************************************************************************************************************
	LR (Left_Right): if we have LR in a level the goal will move left and right (between the range).
	If a level doesn't have LR, then you need to set the value to 0.
	If a level has a LR, then you need to set the chance value to 100,
	If a level has a LR by a chance you need to set the LR to that value.
	
	the range in LR means that the goal left position is a value between the left range and goal right position is a value between the right range.
	The values in range are between -300 and 300 
	(for example range: [left = [-300, -200], right = [200, 300]] means that goal left position is between (-300 and -200) and goal right position is between (200 and 300).
	
	variance: if you want to change the goal LR each time the player shoots, you need to set the chance of variance to 100.
	range of variance in LR means, new left and right position will be chosen from that range.
	
	******************************************************************************************************************************************************************************
	BS (Big_Small): if we have BS in a level the goal width will become bigger and then smaller.
	If a level doesn't have BS, then you need to set the chance value to 0.
	If a level has a BS, then you need to set the value to 100,
	If a level has a BS by a chance you need to set the BS chance to that value.
	
	the range in BS means that the goal small width is a value between the small range, and goal big width is a value between the big range.
	The values in range are between 200 and 480 
	(for example range: [small = [200, 300], big = [350, 400]] means that goal small width is between (200 and 300) and goal big width is between (350 and 400).
	
	variance: if you want to change the goal BS each time the player shoots, you need to set the chance of variance to 100.
	range of variance in BS means, new Big and Small width will be chosen from that range.
	
	******************************************************************************************************************************************************************************
	wind: if we have wind in a level, wind will affects ball movement (in X axis).
	If a level doesn't have wind, then you need to set the chance value to 0.
	If a level has a wind, then you need to set the chance value to 100,
	If a level has a wind by a chance you need to set the wind chance to that value.
	
	the range in wind means that the wind value will be chosen from that range.
	The values in range are between (0.5 and 5).
	
	variance: if you want to change the wind each time the player shoots, you need to set the chance of variance to 100.
	range of variance in wind means, new wind value will be chosen from that range.
	
	******************************************************************************************************************************************************************************
	obstacle: if we have obstacle in a level, obstacle be spawned on the goal and adds some challenge to game.
	If a level doesn't have obstacle, then you need to set the chance value to 0.
	If a level has an obstacle, then you need to set the chance value to 100,
	If a level has an obstacle by a chance you need to set the obstacle chance to that value.
	
	difficulty: it determines the difficulty of obstacles. 
	You can set difficulty to
	"None" (which means there is no obstacle.) | "Easy" | "Medium" | "Hard"
	
	isCenter: it determines if the obstacle type is center or not.
	You can set isCenter to
	"Center" (which means only Center type obstacle will be chosen)
	"NotCenter" (which means only NotCenter type obstacle will be chosen)
	"All" (which means both Center and NotCenter type obstacle will be chosen)
	
	index: this is the index of the obstacle you choose (in the "obtacle.json" file). But you can also set it to "Random" to Randomly choose an index.
	for example:
	obstacle: {chance: 100, difficulty: "Easy", isCenter: "NotCenter", index: 0}
	it means, from NotCenter set, and from Easy set in NotCenter choose index 0 obstacle.
	for example:
	obstacle: {chance: 100, difficulty: "Medium", isCenter: "Center", index: "Random"}
	it means, from Center set, and from Easy and Medium set in Center, randomly choose an index.
	for example:
	obstacle: {chance: 100, difficulty: "Hard", isCenter: "All", index: "Random"}
	it means, from Center and NotCenter set, and from Easy and Medium and Hard set in Center and NotCenter, randomly choose an index.
	*/

	FIX_LEVELS: [
		{
			speed: [0.5, 0.5],
			goals: [1, 1],
			timer: [chance = 0],
			moveX: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			changeWidth: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			LR: {chance: 0,  range: [left = [0, 0], right = [0, 0]], variance: {chance: 0, range: [left = [0, 0], right = [0, 0]]}},
			BS: {chance: 0,  range: [small = [0, 0], big = [0, 0]], variance: {chance: 0, range: [small = [0, 0], big = [0, 0]]}},
			wind: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			obstacle: {chance: 0, difficulty: "None", isCenter: "Center", index: 0}
		},
		{
			speed: [0.5, 0.5],
			goals: [3, 3],
			timer: [chance = 0],
			moveX: {chance: 100,  range: [-250, -250], variance: {chance: 100, range: [300, 400]}},
			changeWidth: {chance: 0,  range: [0, 0], variance: {chance: 100, range: [0, 0]}},
			LR: {chance: 0,  range: [left = [0, 0], right = [0, 0]], variance: {chance: 0, range: [left = [0, 0], right = [0, 0]]}},
			BS: {chance: 0,  range: [small = [0, 0], big = [0, 0]], variance: {chance: 0, range: [small = [0, 0], big = [0, 0]]}},
			wind: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			obstacle: {chance: 0, difficulty: "None", isCenter: "Center", index: 0}
		},
		{
			speed: [0.5, 0.5],
			goals: [1, 1],
			timer: [chance = 0],
			moveX: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			changeWidth: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			LR: {chance: 0,  range: [left = [0, 0], right = [0, 0]], variance: {chance: 0, range: [left = [0, 0], right = [0, 0]]}},
			BS: {chance: 0,  range: [small = [0, 0], big = [0, 0]], variance: {chance: 0, range: [small = [0, 0], big = [0, 0]]}},
			wind: {chance: 100,  range: [0.5, 0.5], variance: {chance: 0, range: [0, 0]}},
			obstacle: {chance: 0, difficulty: "None", isCenter: "Center", index: 0}
		},
		{
			speed: [0.5, 0.5],
			goals: [3, 3],
			timer: [chance = 0],
			moveX: {chance: 100,  range: [-200, -200], variance: {chance: 100, range: [400, 600]}},
			changeWidth: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			LR: {chance: 0,  range: [left = [0, 0], right = [0, 0]], variance: {chance: 0, range: [left = [0, 0], right = [0, 0]]}},
			BS: {chance: 0,  range: [small = [0, 0], big = [0, 0]], variance: {chance: 0, range: [small = [0, 0], big = [0, 0]]}},
			wind: {chance: 100,  range: [5, 5], variance: {chance: 0, range: [3, 4]}},
			obstacle: {chance: 0, difficulty: "None", isCenter: "Center", index: 0}
		},
		{
			speed: [0.7, 0.7],
			goals: [2, 2],
			timer: [chance = 0],
			moveX: {chance: 100,  range: [200, 200], variance: {chance: 100, range: [400, 600]}},
			changeWidth: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			LR: {chance: 0,  range: [left = [0, 0], right = [0, 0]], variance: {chance: 0, range: [left = [0, 0], right = [0, 0]]}},
			BS: {chance: 100,  range: [small = [250, 250], big = [350, 350]], variance: {chance: 0, range: [small = [0, 0], big = [0, 0]]}},
			wind: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			obstacle: {chance: 0, difficulty: "None", isCenter: "Center", index: 0}
		},
		{
			speed: [0.5, 0.5],
			goals: [3, 3],
			timer: [chance = 100],
			moveX: {chance: 100,  range: [100, 300], variance: {chance: 100, range: [300, 600]}},
			changeWidth: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			LR: {chance: 0,  range: [left = [0, 0], right = [0, 0]], variance: {chance: 0, range: [left = [0, 0], right = [0, 0]]}},
			BS: {chance: 0,  range: [small = [0, 0], big = [0, 0]], variance: {chance: 0, range: [small = [0, 0], big = [0, 0]]}},
			wind: {chance: 0,  range: [1, 2], variance: {chance: 0, range: [0, 0]}},
			obstacle: {chance: 0, difficulty: "None", isCenter: "Center", index: 0}
		},
		{
			speed: [1.5, 1.5],
			goals: [2, 2],
			timer: [chance = 0],
			moveX: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			changeWidth: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			LR: {chance: 100,  range: [left = [-300, -300], right = [300, 300]], variance: {chance: 0, range: [left = [0, 0], right = [0, 0]]}},
			BS: {chance: 0,  range: [small = [0, 0], big = [0, 0]], variance: {chance: 0, range: [small = [0, 0], big = [0, 0]]}},
			wind: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			obstacle: {chance: 0, difficulty: "None", isCenter: "Center", index: 0}
		},
		{
			speed: [0.5, 0.5],
			goals: [2, 2],
			timer: [chance = 0],
			moveX: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			changeWidth: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			LR: {chance: 0,  range: [left = [0, 0], right = [0, 0]], variance: {chance: 0, range: [left = [0, 0], right = [0, 0]]}},
			BS: {chance: 0,  range: [small = [0, 0], big = [0, 0]], variance: {chance: 0, range: [small = [0, 0], big = [0, 0]]}},
			wind: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			obstacle: {chance: 100, difficulty: "Easy", isCenter: "NotCenter", index: 0}
		},
		{
			speed: [0.8, 0.8],
			goals: [3, 3],
			timer: [chance = 100],
			moveX: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			changeWidth: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			LR: {chance: 100,  range: [left = [-200, -200], right = [300, 300]], variance: {chance: 0, range: [left = [0, 0], right = [0, 0]]}},
			BS: {chance: 100,  range: [small = [200, 200], big = [350, 350]], variance: {chance: 0, range: [small = [0, 0], big = [0, 0]]}},
			wind: {chance: 100,  range: [2.5, 2.5], variance: {chance: 0, range: [0, 0]}},
			obstacle: {chance: 0, difficulty: "None", isCenter: "Center", index: 0}
		},
		{
			speed: [0.9, 0.9],
			goals: [3, 3],
			timer: [chance = 0],
			moveX: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			changeWidth: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			LR: {chance: 100,  range: [left = [-300, -300], right = [0, 0]], variance: {chance: 100, range: [left = [-300, 300], right = [300, 300]]}},
			BS: {chance: 0,  range: [small = [0, 0], big = [0, 0]], variance: {chance: 100, range: [small = [0, 0], big = [0, 0]]}},
			wind: {chance: 100,  range: [1.5, 1.5], variance: {chance: 0, range: [2, 3.5]}},
			obstacle: {chance: 0, difficulty: "None", isCenter: "Center", index: 0}
		},
		{
			speed: [0.5, 0.5],
			goals: [3, 3],
			timer: [chance = 0],
			moveX: {chance: 100,  range: [0, 0], variance: {chance: 100, range: [300, 300]}},
			changeWidth: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			LR: {chance: 0,  range: [left = [0, 0], right = [0, 0]], variance: {chance: 0, range: [left = [0, 0], right = [0, 0]]}},
			BS: {chance: 0,  range: [small = [0, 0], big = [0, 0]], variance: {chance: 0, range: [small = [0, 0], big = [0, 0]]}},
			wind: {chance: 100,  range: [4, 4], variance: {chance: 0, range: [2.5, 3.5]}},
			obstacle: {chance: 0, difficulty: "None", isCenter: "Center", index: 0}
		},
		{
			speed: [0.5, 0.5],
			goals: [2, 2],
			timer: [chance = 0],
			moveX: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			changeWidth: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			LR: {chance: 0,  range: [left = [0, 0], right = [0, 0]], variance: {chance: 0, range: [left = [0, 0], right = [0, 0]]}},
			BS: {chance: 0,  range: [small = [0, 0], big = [0, 0]], variance: {chance: 0, range: [small = [0, 0], big = [0, 0]]}},
			wind: {chance: 0,  range: [0, 0], variance: {chance: 0, range: [0, 0]}},
			obstacle: {chance: 100, difficulty: "Easy", isCenter: "Center", index: 1}
		}
	],
	
	
	RANDOM_LEVELS: [
		{
			duration: 5,
			speed: [0.9, 1.2],
			goals: [2, 4],
			timer: [chance = 30],
			moveX: {chance: 50,  range: [-300, 300], variance: {chance: 50, range: [100, 400]}},
			changeWidth: {chance: 50,  range: [250, 400], variance: {chance: 50, range: [50, 100]}},
			LR: {chance: 50,  range: [left = [-300, 100], right = [200, 300]], variance: {chance: 50, range: [left = [-300, 100], right = [300, 300]]}},
			BS: {chance: 50,  range: [small = [200, 250], big = [300, 350]], variance: {chance: 50, range: [small = [200, 300], big = [400, 400]]}},
			wind: {chance: 50,  range: [0.5, 3], variance: {chance: 0, range: [2, 4]}},
			obstacle: {chance: 50, difficulty: "Medium", isCenter: "Center", index: "Random"}
		},
		{
			duration: 5,
			speed: [0.9, 1.2],
			goals: [2, 6],
			timer: [chance = 20],
			moveX: {chance: 70,  range: [-300, 300], variance: {chance: 50, range: [300, 400]}},
			changeWidth: {chance: 30,  range: [220, 350], variance: {chance: 50, range: [40, 80]}},
			LR: {chance: 60,  range: [left = [-300, 100], right = [200, 300]], variance: {chance: 80, range: [left = [-300, 100], right = [300, 300]]}},
			BS: {chance: 60,  range: [small = [200, 250], big = [300, 350]], variance: {chance: 50, range: [small = [200, 250], big = [300, 350]]}},
			wind: {chance: 60,  range: [1, 3], variance: {chance: 0, range: [2, 4]}},
			obstacle: {chance: 70, difficulty: "Medium", isCenter: "All", index: "Random"}
		},
		{
			duration: 10,
			speed: [1, 1.3],
			goals: [2, 7],
			timer: [chance = 30],
			moveX: {chance: 70,  range: [-300, 300], variance: {chance: 50, range: [300, 400]}},
			changeWidth: {chance: 30,  range: [220, 350], variance: {chance: 50, range: [40, 80]}},
			LR: {chance: 60,  range: [left = [-300, 100], right = [200, 300]], variance: {chance: 80, range: [left = [-300, 100], right = [300, 300]]}},
			BS: {chance: 60,  range: [small = [200, 250], big = [300, 350]], variance: {chance: 50, range: [small = [200, 250], big = [300, 350]]}},
			wind: {chance: 60,  range: [1, 5], variance: {chance: 0, range: [.5, 5]}},
			obstacle: {chance: 70, difficulty: "Hard", isCenter: "All", index: "Random"}
		},
		{
			duration: "Always",
			speed: [1, 1.3],
			goals: [2, 8],
			timer: [chance = 30],
			moveX: {chance: 70,  range: [-300, 300], variance: {chance: 50, range: [300, 400]}},
			changeWidth: {chance: 30,  range: [220, 350], variance: {chance: 50, range: [40, 80]}},
			LR: {chance: 60,  range: [left = [-300, 100], right = [200, 300]], variance: {chance: 80, range: [left = [-300, 100], right = [300, 300]]}},
			BS: {chance: 60,  range: [small = [200, 250], big = [300, 350]], variance: {chance: 50, range: [small = [200, 250], big = [300, 350]]}},
			wind: {chance: 60,  range: [1, 5], variance: {chance: 0, range: [.5, 5]}},
			obstacle: {chance: 70, difficulty: "Hard", isCenter: "All", index: "Random"}
		}
	]
};