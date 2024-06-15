import './ProgressBar.scss';

interface PgProps {
    bgcolor: string;
    completed: number;
}

const ProgressBar: React.FC<PgProps> = ({ bgcolor, completed }) => {
    const containerStyles: React.CSSProperties = {
        height: 10,
        width: '95%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 5
    };

    const fillerStyles: React.CSSProperties = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    };

    const labelStyles: React.CSSProperties = {
        padding: 1,
        color: 'white',
        fontWeight: 'bold'
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}></span>
            </div>
        </div>
    );
};

export default ProgressBar;