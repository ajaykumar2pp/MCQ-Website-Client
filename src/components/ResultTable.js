import React from 'react'

const ResultTable = () => {
  return (
    <div>
        <table className='mb-5'>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td>Daily Tuition</td>
                    <td>03</td>
                    <td>20</td>
                    <td>Passed</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ResultTable