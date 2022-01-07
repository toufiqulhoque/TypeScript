type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}
const Greet = (props: GreetProps) => {
    
    return (
        <div>


            <p>{
                props.isLoggedIn ? `Hello hello{props.name}{props.messageCount}` : 'welcome Guest'
            }
            </p>
        </div>
    );
};

export default Greet;