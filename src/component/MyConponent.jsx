import PropTypes from 'prop-types';

export default function MyComponent(props){
    return(
        <>
        <div style={{height:"200px",width:"200px",backgroundColor:"green"}}>
        {props.title}
        </div>
        </>
    );
}

MyComponent.defaultProps={
    title:"Your title here"
}

MyComponent.prototype={
    title: PropTypes.string
}