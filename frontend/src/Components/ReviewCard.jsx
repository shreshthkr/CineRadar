import React from 'react'
import styled from 'styled-components';
import {AiFillStar} from "react-icons/ai";

const ReviewCard = () => {
  return (
    <REVIEW>
      <div className='people-info'>
        <div className='users-avatar'>
            <img src="https://secure.gravatar.com/avatar/4c0509ab18a992df41a466731bfbac8a.jpg?s=45" alt="people" />
        </div>
        <div className='users-info'>
            <div className='users-name'>
                <h2>A review by Brent Marchant</h2>
            </div>
            <div className='review-date'>
                <div>
                    <p><AiFillStar />5.0</p>
                </div>
                <p>Written by Brent Marchant on 30 july 2023</p>
            </div>
        </div>
      </div>
      <div className='content'>
        <p>“Heavy is the arm that wears its heart on its sleeve.” That’s the best way to sum up this overwritten, overlong, stunningly obvious treatise on gender equality, consumerism and existentialism, whose messages get beaten to death beginning early on and never let up, an exhausting experience, to be sure. Writer-director Greta Gerwig’s latest offering, co-written with collaborator Noah Baumbach, features a dreadful script that’s about as subtle as a young adult novel, drones on and on and on for about 30 minutes longer than it needs to be, becomes endlessly repetitive, and incorporates story</p>
      </div>
    </REVIEW>
  )
}

export default ReviewCard;


const REVIEW = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid teal;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`