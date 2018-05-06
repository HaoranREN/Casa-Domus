# read temperature file to a library {division number: [Jan temp, July temp],}
input_file = open("input.csv")
input_read = input_file.readlines()

temperature = {}

for line in input_read:
    line = line.strip()
    line = line.split(",")
    temperature[line[0]] = [float(line[1]), float(line[2])]

input_file.close()


# read fips to div number map in to a list
fips_file = open("fips.csv")
fips = fips_file.readlines()

match = []

for line in fips:
    line = line.strip()
    line = line.split(",")
    match.append(line)
    
fips_file.close()


# match data to output library {fips: [Jan data total, Jan count, July data total, July count],}
output_file = open("output.csv", "w")
output = {}

for f2d in match:
    if f2d[0] in output:
        output[f2d[0]][0] += float(temperature[f2d[1]][0])
        output[f2d[0]][1] += 1
        output[f2d[0]][2] += float(temperature[f2d[1]][1])
        output[f2d[0]][3] += 1
    else:
        output[f2d[0]] = [0,0,0,0]
        output[f2d[0]][0] += float(temperature[f2d[1]][0])
        output[f2d[0]][1] += 1
        output[f2d[0]][2] += float(temperature[f2d[1]][1])
        output[f2d[0]][3] += 1
        

#calculate average for fips covered by more than one division
for key, value in output.items():
    if value[1] == 0:
        value[0] = -99.99
    else:
        value[0] /= value[1]

    if value[3] == 0:
        value[2] = -99.99
    else:    
        value[2] /= value[3]
    
    output_file.write(key + "," + str("%0.2f" % value[0]) + "," + str("%0.2f" % value[2]) + "\n")
    
output_file.close()

