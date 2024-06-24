import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Fundacct = () => {
    const [user, setuser] = useState("")
    const [account, setaccount] = useState("")
    const [bvnOrNin, setbvnOrNin] = useState("")
    let url = "http://localhost:5000/client/dashboard";
    let token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((res) => {
                console.log(res.data);
                setuser(res.data.user); 
                getAccount(res.data.user.emailLink.email)
            })
            .catch((err) => {
                console.log(err);
                navigate('/signin')
            });
    }, []);

    const getAccount = (email) => {
        const url = 'http://localhost:5000/client/get_account'
        axios.post(url, { clientEmail: email })
            .then((res) => {
                console.log(res);
                if (res) {
                    document.getElementById('created').style.display = 'block';
                    document.getElementById('notCreated').style.display = 'none';
                    setaccount(res.data.data.accounts)
                }

            })
            .catch((err) => {
                console.log(err);
                document.getElementById('created').style.display = 'none';
                document.getElementById('notCreated').style.display = 'block';
            })

    }

    const createAccount = () => {
        const url = 'http://localhost:5000/client/monnify'
        let data = {
            accountReference: `Kash_MFY_${generateAccountNumber()}`,
            accountName: `${user.firstName} ${user.lastName}`,
            customerEmail: user.emailLink.email,
            bvn: bvnOrNin,
            customerName: `${user.firstName} ${user.lastName}`
        }
        axios.post(url, data)
            .then((res) => {
                console.log(res);
                toast.success('Account created successfully');
                setTimeout(() => {
                    window.location.reload()
                }, 2500);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function generateAccountNumber() {
        const randomNumber = Math.floor(Math.random() * Math.pow(10, 10));
        const accountNumber = randomNumber.toString().padStart(10, "0");
        return accountNumber;
      }

    return (
        <>
            <h1>Fund Your Wallet</h1>
            <h3>Reserved accounts</h3>
            <div id="created">
                <p>
                    Send money to any of this <b>Reserved account</b> to automatically
                    fund your wallet.
                </p>
                <div>
                    {account ? (
                        account.map((acc) => {
                            return (
                                <div>
                                    <p>kash {acc.accountName}</p>
                                    <p>{acc.accountNumber}</p>
                                    <p>{acc.bankName}</p>
                                </div>
                            )
                        })
                    ) : null
                    }
                </div>
            </div>

            <div id="notCreated">
                <p>You have no Reserved account created!</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create account</button>
            </div>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label htmlFor="ninOrBvn">BVN or NIN</label>
                            <input className="form-control w-100" type="text" id="ninOrBvn" onChange={(e) => { setbvnOrNin(e.target.value) }} />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={createAccount}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fundacct;