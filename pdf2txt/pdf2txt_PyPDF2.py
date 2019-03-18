#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys
import PyPDF2
import hashlib


def readPdf(fileName):
    pdfFileObject = open(fileName, 'rb')
    pdfReader = PyPDF2.PdfFileReader(pdfFileObject)
    count = pdfReader.numPages
    out = ''
    for i in range(count):
        page = pdfReader.getPage(i)
        out += page.extractText()
    return out.replace('\n', '')


def hashTXT(fileName, pdfContent):
    listfile = pdfContent.split('.')

    hashedList = []
    for i in listfile:
        hashedList.append(hashlib.sha256(i.encode('utf-8')).hexdigest())
    
    with open(fileName.split('.')[0] + '_hash.txt', 'w') as out:
        for i in hashedList:
            out.write("%s\n" % i)

def main():
    fileName = sys.argv[1]
    pdfContent = readPdf(fileName)
    hashValue = hashTXT(fileName, pdfContent)

if __name__ == '__main__':
    main()
