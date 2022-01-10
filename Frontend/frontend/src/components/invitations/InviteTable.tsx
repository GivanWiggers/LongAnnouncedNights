import { User } from "../../globalTypes";
import "./InviteTable.scss";

interface ITableProps {
    users: User[];
    SetSelectedUser: (user: User) => void;
}

export default function InviteTable(props: ITableProps) {
    return (
        <div className="Invite-Table">
            <div className="thead">
                <div className="row">
                    <p>{"name.label"}</p>
                    <p>{"email.label"}</p>
                </div>
            </div>
            <div className="tbody">
                {props.users.map((user: User, index: number) => {
                    return (
                        <div key={index} onClick={() => props.SetSelectedUser(user)} className="row">
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
