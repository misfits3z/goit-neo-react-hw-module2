import css from './Feedback.module.css'


export default function Feedback({values, total, positivePercentage}) {
    return(
        <div className={css.feedback}>
           <p>Good: {values.good}</p>
           <p>Neutral: {values.neutral}</p>
           <p>Bad: {values.bad}</p>
           <p>Total Feedback: {total}</p>
           <p>Positive Feedback: {positivePercentage}%</p>
        </div>

    )
};