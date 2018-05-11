input_file = open("County_Information.txt")
input_read = input_file.readlines()
input_data = []

for line in input_read:
    line = line.strip()
    line = line.split(",")
    input_data.append(line)
    
input_file.close()

print(input_data[0])


output_file = open("county_coordinate.csv", "w")

for line in input_data:
    
    string = ""
    for element in line[3:-2]:
        string = string + " " + element
    string = string.strip()
    output_file.write(line[0] + "," + line[1] + "," + line[2] + "," + string + "," + line[-2] + "," + line[-1] + "\n")

   
output_file.close()