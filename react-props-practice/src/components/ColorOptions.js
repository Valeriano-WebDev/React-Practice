class ColorOptions extends Component{
    render(){
        assignColor = () => {
            this.props.changeColor(this.props.value)
        }
        return(
            <React.Fragment>
                <button>Change the box to { this.props.value }</button>
            </React.Fragment>
        )
    }f