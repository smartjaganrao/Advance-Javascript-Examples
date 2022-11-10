var bestlover = {
BoyFriend: "Jagan",
GirlFriend: "Vichu",
NewFriends: {
Friend1: "Saravanan",
Friend2: "Deepak"
},
OldFriends: ["Selva","Stalin"]
}

var x = bestlover.NewFriends;
x.Friend2 = "Dee FUck";

var y = bestlover.OldFriends;
y['OldFriends'] = ['Changed'];
y['New Friend'] = ["New Selva"];

console.log(y['New Friend']);

console.log(x.Friend2)

console.log(bestlover);
console.log(bestlover.BoyFriend);
console.log(bestlover.NewFriends);
console.log(bestlover.NewFriends.Friend1);
console.log(bestlover.OldFriends);