import React from 'react'
import { connect } from 'react-redux'
import { decrementCount } from '../Redux/Actions/counterActions'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function DisplayCounterValue({counter, decrementCount}) {
  return (
    <>
      <div>DisplayCounterValue : {counter.count} </div>
       <button onClick={() => decrementCount(5)} >Decrese 5</button>
       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
       <div>
       <IconButton aria-label="cart">
        <StyledBadge badgeContent={counter.count} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
       </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    counter : store.counter
  }
}

const mapDispatchToProps = {
  decrementCount
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCounterValue)