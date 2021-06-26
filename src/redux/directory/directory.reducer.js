const INITIAL_STATE = {
	section :
			[
				{
					title : 'HATS',
					id : 1,
					img : 'https://i1.wp.com/khaleejmag.com/wp-content/uploads/2021/02/hats-for-men.jpeg?ssl=1',
					matchUrl : 'shop/hats'
				},
				{
					title : 'JACKETS',
					id : 2,
					img : 'https://asset20.ckassets.com/thegoodlookbook/wp-content/uploads/sites/2/2019/01/Bomber-Jacket-41-765x571-e1546687719642.jpg',
					matchUrl : 'shop/jackets'
				},
				{
					title : 'PARTY WEAR',
					id : 3,
					img :'https://img.freepik.com/free-photo/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing_197531-11045.jpg?size=626&ext=jpg',
					matchUrl : 'shop/partwear'
				},
				{
					title : 'SANDALS',
					id : 4,
					img : 'https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2020-06/gettyimages-1148414799.jpg?h=2c630805&itok=XjfGtnRV',
					matchUrl : 'shop/sandals',
					size : 'large'
				},
				{
					title : 'FORMALS',
					id : 5,
					img : 'https://i.pinimg.com/originals/73/f1/14/73f11461b00cf43c1c80bb1b38985b89.jpg',
					size : 'large',
					matchUrl : 'shop/formals'
				}
			]
}

const directoryReducer = (state = INITIAL_STATE, action) =>{
	switch(action.type)
	{
		default:
			return state;
	}
}

export default directoryReducer;