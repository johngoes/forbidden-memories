import { TextField } from '@material-ui/core';
import React from 'react';
import CartaTipoList from '../../components/CartaTipoList';

function CartaTipoForm() {
    return (
        <form>
            <TextField id="outlined-basic" label="Tipo" variant="outlined" />
        </form>
    );
}

function AdminTipo () {
    return (
        <div>
           <CartaTipoList />
           <CartaTipoForm />
        </div>
    );
}

export default AdminTipo;