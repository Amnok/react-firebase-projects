const initialState = {
    projects: [
        {id: 1, title: 'xyz', content: 'sakldas dsa d sad salkdjsklajdsa dslajkdnlskajdklsad sa dasklcxzc xz cxzcxzc xsda d sad sa d sad'},
        {id: 2, title: 'xyz1', content: 'sakldas dsa d sad salkdjsklajdsa dslajkdnlskajdklsad sa dasklcxzc xz cxzcxzc xsda d sad sa d sad'},
        {id: 3, title: 'xyz2', content: 'sakldas dsa d sad salkdjsklajdsa dslajkdnlskajdklsad sa dasklcxzc xz cxzcxzc xsda d sad sa d sad'}
    ]
};
const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
        return state;
        case 'CREATE_PROJECT_ERROR': 
        console.log("CREATE_PROJECT_ERROR", action.err);
        return state;
        default:
            return state;
    }
}

export default projectReducer;