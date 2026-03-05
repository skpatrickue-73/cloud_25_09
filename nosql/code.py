

import json

## Read

# f = open("data.json", "r", encoding="utf-8")
# data_users = json.load(f)
# print(data_users)

# is Bob there and what is his id? 

# def check_id(name_to_be_checked):
#     for user in data_users:
#         if user["name"] == name_to_be_checked:
#             return user["id"]

# user_id = check_id("Bob")
# print(user_id)

## Write

with open("data.json", "r", encoding="utf-8") as f:
    user_data = json.load(f)

print(user_data)

new_data = {
    "id": 3 ,
    "name": "Tony"
}

user_data.append(new_data)

with open("data.json", "w", encoding="utf-8") as f:
    json.dump(user_data, f, indent=2)

print(user_data)



# Update

with open("data.json", "r", encoding="utf-8") as f:
    user_data = json.load(f)



new_data = {
    "id": 3 ,
    "name": "Anna"
}

user_data[2] = new_data

with open("data.json", "w", encoding="utf-8") as f:
    json.dump(user_data, f, indent=2)

print(user_data)

# Delete




# f = open("data.json", "r", encoding="utf-8")
# data_users = json.load(f)

# # with open("data.json", "r", encoding="utf-8") as f:
# #     print(f)
# #     data_users = json.load(f)


# print(data_users)

