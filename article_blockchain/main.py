import time
import hashlib

class Block():
    def __init__(self, preHash, timeStamp, hashArticle, hashTitle):
        self.preHash = preHash
        self.timeStamp = timeStamp
        self.hashArticle = hashArticle
        self.hashTitle = hashTitle

genius = Block("123", str(int(time.time())), "ABC", "DEF")
attrs = vars(genius)
print(attrs.items())
BlockString = ''
for i, j in attrs.items():
    BlockString = BlockString + j
print(BlockString)

BlockHashAll = hashlib.sha256(BlockString.encode('utf-8')).hexdigest()

print(BlockHashAll)

b1 = Block(BlockHashAll, str(int(time.time())), "EDC", "1qa")
attrs = vars(b1)
bs = ''
for i, j in attrs.items():
    bs = bs + j
bha = hashlib.sha256(bs.encode('utf-8')).hexdigest()
print(bha)
