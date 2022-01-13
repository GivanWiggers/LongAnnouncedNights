import { User } from "../../globalTypes";
import "./InviteTable.scss";

interface ITableProps {
    users: User;
    // SetSelectedUser: (user: User) => void;
}

export default function InviteTable(props: ITableProps) {
    return (
        <div className="Invite-Table">
            <div className="thead">
                <div className="row">
                    <p>{"Name"}</p>
                    <p>{"Email"}</p>
                </div>
            </div>
            <div className="tbody">
                {/* {props.users.map((user: User, index: number) => {
                    return (
                        //<div key={index} onClick={() => props.SetSelectedUser(user)} className="row">
                        <div key={index} className="row">
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    );
                })} */}
                <div key={props.users.id} className="row">
                    <p>{props.users.name}</p>
                    <p>{props.users.email}</p>
                </div>
            </div>
        </div>
    );
}
