type OscarProps = {
    children: React.ReactNode
}

const Oscar = (props: OscarProps) => {
    return (
        <div>
            <p>{props.children}</p>
        </div>
    );
};

export default Oscar;